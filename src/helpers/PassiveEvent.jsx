export function addPassiveEventListener () {
  const iframe = document.querySelector('iframe[src*="google.com/maps"]')
  if (iframe) {
    iframe.addEventListener('load', function () {
      iframe.contentWindow.document.addEventListener('touchstart', function (event) {
        event.preventDefault()
      }, { passive: true })
    })
  }
}
