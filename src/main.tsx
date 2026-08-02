import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import VlyToolbar from "../vly-toolbar-readonly.tsx";
import "./index.css";

/** Hard guard so runtime errors never leave the preview as a blank page. */
class RootErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; message: string; stack: string }
> {
  state = { hasError: false, message: "", stack: "" };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      message: error.message || "Unknown runtime error",
      stack: error.stack || "",
    };
  }

  componentDidCatch(err: Error) {
    console.error("[WebContainer preview] Root crash:", err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#FDF6E3] p-6 text-[#0A0A0A]">
          <div className="max-w-lg text-center">
            <p className="text-sm font-semibold">Preview runtime error</p>
            <p className="mt-2 break-words text-xs text-[#0A0A0A]/50">
              {this.state.message}
            </p>
            {this.state.stack && (
              <pre className="mt-3 max-h-40 overflow-auto rounded-lg border-2 border-[#0A0A0A] p-2 text-left text-[10px] leading-4 text-[#0A0A0A]/40">
                {this.state.stack}
              </pre>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RootErrorBoundary>
      <VlyToolbar />
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
