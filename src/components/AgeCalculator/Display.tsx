type DisplayProps = {
  date: { day: string; month: string; year: string };
};

const Display = ({ date }: DisplayProps) => (
  <div className=" pt-16 md:pt-8 text-center md:text-left">
    <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
      <span className=" text-purple mr-2">{date.year}</span>years
    </p>
    <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
      <span className=" text-purple mr-2">{date.month}</span>months
    </p>
    <p className=" italic font-bold text-5xl md:text-6xl text-fontSizeInput">
      <span className=" text-purple mr-2">{date.day}</span>days
    </p>
  </div>
);

export default Display;
