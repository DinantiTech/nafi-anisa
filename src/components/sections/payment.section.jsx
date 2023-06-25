import { useMemo, useState } from "react";
import { ALL_PAYMENT } from "../../contants/identity.const";
import { Icon } from "@iconify/react";
import { COPY_ICON, SUCCESS_ICON } from "../../contants/icon.const";
import toast, { Toaster } from 'react-hot-toast';

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

  useMemo(() => {
    setSelectedPayment(filteredPayments[0] ?? '')
  }, [])

  const copyToClipboard = () => {
    if (selectedPayment) {
      const textToCopy = `${selectedPayment.code}${selectedPayment.value}`;
      navigator.clipboard.writeText(textToCopy);
      // Optionally, you can show a success message or perform any other desired action
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 justify-between items-center py-4 px-4`}
        >
          <div className="flex items-center justify-center gap-x-2">
              {selectedPayment?.url ? (
                <div className="">
                  <img
                    className="w-12"
                    src={selectedPayment?.url}
                    alt={selectedPayment?.name}
                  />
                </div>
              ) : null}
            <p className="text-sm text-gray-900">
              No REK {selectedPayment.code+selectedPayment.value} berhasil disalin
            </p>
          </div>

          <Icon icon={SUCCESS_ICON} className="text-lg text-green-600" />
        </div>
      ))
    }
  };

  return (
    <div className="w-full flex items-center justify-center flex-col px-4 gap-y-3 py-10">
      <Toaster position="top-center"
        reverseOrder={false} />

      <h2 className="mb-2 uppercase sm:text-2xl text-xl font-primary">
        Tanda Kasih
      </h2>
      <select
        id="payment"
        className="border border-gray-300 rounded px-3 py-2 w-full focus:border-none font-secondary"
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
        <div className="text-center mt-3 flex flex-col items-center justify-center font-secondary">
          {selectedPayment?.url ? (
            <img src={selectedPayment?.url} alt={selectedPayment?.name} className="mb-5 sm:w-32 w-24" />
          ) : null}
          <p>BANK {selectedPayment.name} <span className="text-gray-400">({selectedPayment.code})</span></p>
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