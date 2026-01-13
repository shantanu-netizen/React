function StatusBadge({ isPlaced }) {
  return (
    <p>
      Status: {isPlaced ? "Placed" : "Not Placed"}
    </p>
  );
}

export default StatusBadge;
