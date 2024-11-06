/* eslint-disable react/prop-types */
const ReuseText = ({ title, paragraph }) => {
  return (
    <div className="text-center py-16 space-y-4">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-xl">{paragraph}</p>
    </div>
  );
};

export default ReuseText;
