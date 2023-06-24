import { useEffect, useMemo, useState } from "react";
import { ALL_PAYMENT } from "../../contants/identity.const";
import { Icon } from "@iconify/react";
import { COPY_ICON } from "../../contants/icon.const";

export default function PaymentSection() {
    const [selectedPayment, setSelectedPayment] = useState(null);
  
    const filteredPayments = ALL_PAYMENT.filter((payment) => payment.value !== '');
  
    const handlePaymentChange = (event) => {
      const selectedValue = event.target.value;
      const selectedPayment = filteredPayments.find(
        (payment) => payment.name === selectedValue
      );
      setSelectedPayment(selectedPayment);
    };

    const copyToClipboard = () => {
        if (selectedPayment) {
          const textToCopy = `${selectedPayment.code}${selectedPayment.value}`;
          navigator.clipboard.writeText(textToCopy);
          // Optionally, you can show a success message or perform any other desired action
        }
      };

    return (
      <div className="w-full flex items-center justify-center flex-col px-4 gap-y-3 py-10">
        <h2 className="mb-2 uppercase sm:text-2xl text-xl">
          Tanda Kasih
        </h2>
        <select
          id="payment"
          className="border border-gray-300 rounded px-3 py-2 w-full focus:border-none"
          onChange={handlePaymentChange}
        >
          <option value="">Pilih BANK Transfer</option>
          {filteredPayments.map((payment) => (
            <option key={payment.code} value={payment.name}>
              BANK {payment.name}
            </option>
          ))}
        </select>
  
        {selectedPayment && (
          <div className="text-center mt-3 flex flex-col items-center justify-center">
            { selectedPayment?.url ? (
                <img src={selectedPayment?.url} alt={selectedPayment?.name} className="mb-5 w-32" />
            ) : null }
            <p>BANK {selectedPayment.name} <span className="text-gray-400">({ selectedPayment.code })</span></p>
            <div onClick={copyToClipboard} className="flex items-center justify-center gap-x-1 cursor-pointer">
                <p className="font-semibold">No Rek/Account Number: {selectedPayment.value}</p>
                <span>
                    <Icon icon={COPY_ICON} />
                </span>
            </div>
            <p>a/n: {selectedPayment.nameAccount}</p>
          </div>
        )}
      </div>
    );
  }