/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export default async function Image() {
  const logoSrc: any = await fetch(new URL('./img-opengraph.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )
 
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={logoSrc} width="100%" style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
    )
  )
}