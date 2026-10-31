let supportsDisplayTransition

function canTransitionDisplay() {
  if (supportsDisplayTransition !== undefined) return supportsDisplayTransition
  if (
    typeof window === 'undefined' ||
    !window.CSS?.supports?.('transition-behavior', 'allow-discrete') ||
    !document.body
  ) {
    return false
  }
  const probe = document.createElement('div')
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;'
  document.body.appendChild(probe)
  // Force style computation before toggling display
  void getComputedStyle(probe).display
  probe.style.display = 'none'
  supportsDisplayTransition = getComputedStyle(probe).display === 'block'
  probe.remove()
  return supportsDisplayTransition
}

export function supportsTopLayerExit() {
  return (
    typeof window !== 'undefined' &&
    Boolean(window.CSS?.supports?.('overlay', 'auto')) &&
    canTransitionDisplay()
  )
}

export async function closeTopLayer(dialog) {
  if (!dialog || !dialog.open) return

  if (!supportsTopLayerExit()) {
    if (dialog.hasAttribute('data-closing')) return
    dialog.setAttribute('data-closing', '')
    const animations =
      typeof dialog.getAnimations === 'function'
        ? dialog.getAnimations({ subtree: true })
        : []
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((resolve) => setTimeout(resolve, 600)),
      ])
    }
    if (!dialog.hasAttribute('data-closing')) return
    dialog.removeAttribute('data-closing')
  }

  if (dialog.open) {
    dialog.close()
  }
}
