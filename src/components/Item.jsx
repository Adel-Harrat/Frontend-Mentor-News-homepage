const Item = ({ item }) => {
  const { id, title, subtitle, imageUrl } = item;
  return (
    <article className="grid grid-cols-6 gap-6 mb-10">
      <div className="overflow-hidden col-span-2">
        <img src={imageUrl} alt={`${title}'s image`} />
      </div>
      <div className="col-span-4 place-self-center ">
        <h2 className="text-3xl font-bold text-custom-grayish-blue">0{id}</h2>
        <a
          href="#"
          className="text-custom-very-dark-blue font-bold mt-2 text-lg hover:text-custom-soft-red transition-all ease-in-out duration-500"
        >
          {title}
        </a>
        <h3 className="text-sm text-custom-dark-grayish-blue mt-2">
          {subtitle}
        </h3>
      </div>
    </article>
  );
};

export default Item;
