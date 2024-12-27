Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// setupTests.js
class MockResizeObserver {
  callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void;

  constructor(
    callback: (entries: ResizeObserverEntry[], observer: ResizeObserver) => void
  ) {
    this.callback = callback;
  }

  observe() {
    // Simula la observación sin hacer nada
  }

  unobserve() {
    // Simula detener la observación sin hacer nada
  }

  disconnect() {
    // Simula la desconexión
  }
}

global.ResizeObserver = MockResizeObserver;
