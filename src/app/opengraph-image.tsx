/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export default async function Image() {
  const logoSrc: ArrayBuffer = await fetch(new URL('./img-opengraph.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  // Convert ArrayBuffer to Base64
  const base64Logo = Buffer.from(logoSrc).toString('base64')
  const mimeType = 'image/jpeg' // Pastikan tipe MIME sesuai dengan file Anda (jpg/png)

  return new ImageResponse(
    (
      <div>
        <img src={`data:${mimeType};base64,${base64Logo}`} height={723} width={500} />
      </div>
    )
  )
}
