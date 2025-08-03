const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Morning Haze */}
      <div
        className="absolute inset-0 -z-10 "
        style={{
          backgroundImage: `
          radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.4) 0%, transparent 60%),
          radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.4) 0%, transparent 70%),
          radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.5) 0%, transparent 80%)
        `,
        }}
      />
      {children}
    </div>
  );
};

export default Background;
