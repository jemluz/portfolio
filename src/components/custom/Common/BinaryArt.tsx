export default function BinaryArt() {
  const elements = [
    {
      text: "0101",
      rot: 15,
      right: "5%",
      top: "10%",
      size: "text-2xl",
      op: "opacity-10",
    },
    {
      text: "10",
      rot: -25,
      right: "15%",
      top: "20%",
      size: "text-5xl",
      op: "opacity-20",
    },
    {
      text: "0",
      rot: 45,
      right: "8%",
      top: "35%",
      size: "text-7xl",
      op: "opacity-[0.03]",
    },
    {
      text: "110",
      rot: -10,
      right: "2%",
      top: "45%",
      size: "text-3xl",
      op: "opacity-15",
    },
    {
      text: "01",
      rot: 80,
      right: "20%",
      top: "60%",
      size: "text-6xl",
      op: "opacity-10",
    },
    {
      text: "10101",
      rot: -5,
      right: "10%",
      top: "75%",
      size: "text-xl",
      op: "opacity-20",
    },
    {
      text: "00",
      rot: 30,
      right: "4%",
      top: "85%",
      size: "text-8xl",
      op: "opacity-[0.03]",
    },
    {
      text: "1",
      rot: -60,
      right: "12%",
      top: "90%",
      size: "text-4xl",
      op: "opacity-15",
    },
    {
      text: "01001",
      rot: 10,
      right: "18%",
      top: "25%",
      size: "text-xl",
      op: "opacity-20",
    },
    {
      text: "111",
      rot: -45,
      right: "6%",
      top: "55%",
      size: "text-4xl",
      op: "opacity-10",
    },
    {
      text: "00010",
      rot: 20,
      right: "22%",
      top: "80%",
      size: "text-sm",
      op: "opacity-30",
    },
    {
      text: "1001",
      rot: -15,
      right: "1%",
      top: "95%",
      size: "text-3xl",
      op: "opacity-10",
    },
    {
      text: "0110",
      rot: 50,
      right: "14%",
      top: "40%",
      size: "text-2xl",
      op: "opacity-20",
    },
    {
      text: "1100",
      rot: -35,
      right: "9%",
      top: "15%",
      size: "text-lg",
      op: "opacity-25",
    },
    {
      text: "001",
      rot: 5,
      right: "25%",
      top: "70%",
      size: "text-5xl",
      op: "opacity-[0.04]",
    },
    {
      text: "101",
      rot: -75,
      right: "3%",
      top: "30%",
      size: "text-xl",
      op: "opacity-15",
    },
  ];

  return (
    <div className="fixed top-0 right-0 w-1/3 h-screen pointer-events-none overflow-hidden z-0 hidden lg:block select-none">
      <div className="absolute top-1/2 -right-[150px] -translate-y-1/2 -rotate-90 text-[8rem] font-bold tracking-[1.5rem] text-gray-100 opacity-50 z-0 whitespace-nowrap">
        mindexe
      </div>
      {elements.map((el, i) => (
        <div
          key={i}
          className={`absolute font-mono font-bold text-black ${el.size} ${el.op} transition-transform duration-1000 ease-in-out`}
          style={{
            right: el.right,
            top: el.top,
            transform: `rotate(${el.rot}deg)`,
          }}
        >
          {el.text}
        </div>
      ))}
    </div>
  );
}
