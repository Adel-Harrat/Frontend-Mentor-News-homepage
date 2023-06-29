import Item from "./Item";

const list_array = [
  {
    id: 1,
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    imageUrl: "./images/image-retro-pcs.jpg",
  },
  {
    id: 2,
    title: "Top 10 Laptops of 2022",
    subtitle: "Our best picks for various needs and budgets.",
    imageUrl: "./images/image-top-laptops.jpg",
  },
  {
    id: 3,
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    imageUrl: "./images/image-gaming-growth.jpg",
  },
];

const List = () => {
  return (
    <section className="mt-16 lg:grid lg:grid-cols-3 lg:gap-6">
      {list_array.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

export default List;
