const LoginLayout = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{ background: "var(--dark-gradient)" }}
    className="fixed top-0 left-0 z-[99999] flex justify-center items-center w-[100%] min-h-[100vh] px-[16px]"
  >
    {children}
  </div>
);

export default LoginLayout;
