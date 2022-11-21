const DATA = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Mutant Ape Yacht Club",
    hasCheck: true,
    hasEye: true,
    floor: 16.79,
    diffPercent: 1.24,
    dayVol: 100.45,
    totalVol: 67.256,
    owner: 13.068,
    items: 19.489,
  },
];

export const Table = () => {
  return (
    <div className="mt-6">
      <div className="grid gap-3 grid-cols-[20%_20%_15%_15%_15%_15%]">
        <div className="">Collection</div>
        <div className="">Floor</div>
        <div className="">24h Vol</div>
        <div className="">Total Vol</div>
        <div className="">Owners</div>
        <div className="">Items</div>
      </div>

      {DATA.map((el) => (
        <div
          key={el.id}
          className="grid gap-3 grid-cols-[20%_20%_15%_15%_15%_15%]"
        >
          <div className="">Mutant Ape Yacht Club</div>
          <div className="">Floor</div>
          <div className="">24h Vol</div>
          <div className="">Total Vol</div>
          <div className="">Owners</div>
          <div className="">Items</div>
        </div>
      ))}
    </div>
  );
};
