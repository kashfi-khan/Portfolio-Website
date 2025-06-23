const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="flex gap-2">
        <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-white rounded-full animate-bounce"></span>
      </div>
    </div>
  );
};

export default Loader;
