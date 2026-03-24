export function useWhatsApp(msg: string) {
  const { public: { whatsappNumber } } = useRuntimeConfig()
  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`

  const local = (whatsappNumber as string).replace(/^55/, '')
  const ddd   = local.slice(0, 2)
  const num   = local.slice(2)
  const phoneDisplay = `(${ddd}) ${num.slice(0, 5)}-${num.slice(5)}`

  function trackClick(page: string, location: string) {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      ;(window as any).dataLayer.push({ event: 'whatsapp_click', page, location })
    }
  }

  return { link, phoneDisplay, trackClick }
}
