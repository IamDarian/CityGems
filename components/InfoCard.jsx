export default function InfoCard(props) {
  return (
    <div className="test_bg flex gap-5 items-center justify-around shadow-lg rounded-lg text-slate-50 h-36 w-[330px] px-5 py-3">
      <div>
        <h2 className="text-slate-400">{props.title}</h2>
        {props.info2 ? (
          <p className="text-xl font-semibold">
            {props.info1}, {props.info2}
          </p>
        ) : (
          <p className="text-4xl font-semibold">{props.info1}</p>
        )}
        {props.county2 ? (
          <p className="text-lg">
            {props.county1}, {props.county2}
          </p>
        ) : (
          <p className="text-lg">{props.county1}</p>
        )}
        {props.county1 && (
          <a
            href={`https://ro.wikipedia.org/wiki/${props.info1}`}
            className="link text-slate-400 hover:text-slate-200"
            target="_blank"
          >
            Learn more...
          </a>
        )}
        {props.children}
      </div>
      <div className="bg-sky-500 rounded-full p-3 min-w-fit">
        {props && (
          <img
            src={props.imgData}
            className="justify-self-end"
            width={"40px"}
            alt="Icon"
          ></img>
        )}
      </div>
    </div>
  );
}
