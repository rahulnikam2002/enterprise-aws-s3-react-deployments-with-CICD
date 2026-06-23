export const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      Shared Button
    </button>
  );
};