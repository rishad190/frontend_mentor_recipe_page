import Image from "next/image";

export default function OmeletteRecipe() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3e6d8]">
      <div className="max-w-2xl bg-white my-6 rounded-lg shadow-lg">
        <div className=" md:p-5">
          <Image
            src="/image-omelette.jpeg"
            alt="Omelette with vegetables"
            width={600}
            height={400}
            className="w-full rounded-lg mb-6"
          />
        </div>

        <div className="p-5">
          <div>
            <h1 className="text-3xl  mb-5">Simple Omelette Recipe</h1>
            <p className="mb-5 text-stone-600">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
            <div className="bg-[#fff5fa] p-5 rounded-lg mb-5">
              <h2 className="text-[#7b284f] text-lg font-semibold">
                Preparation time
              </h2>
              <ul className="text-stone-600">
                <li>
                  <span className="font-semibold">Total:</span> Approximately 10
                  minutes
                </li>
                <li>
                  <span className="font-semibold">Preparation:</span> 5 minutes
                </li>
                <li>
                  <span className="font-semibold">Cooking:</span> 5 minutes
                </li>
              </ul>
            </div>
          </div>
          {/* ingredients */}
          <div className="p-1">
            <h2 className="text-2xl mb-4 text-[#854632] ">Ingredients</h2>
            <ul className="list-disc pl-5 text-stone-600">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
        </div>
        <div className="m-6 border-y-2 py-5">
          <h2 className="text-[#854632] text-2xl  mb-4">Instructions</h2>
          <ol className="list-decimal text-stone-600  pl-5 mb-8 space-y-4">
            <li>
              <span className="font-semibold text-stone-600">
                Beat the eggs:
              </span>{" "}
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </li>
            <li>
              <span className="font-semibold text-stone-600">
                Heat the pan:
              </span>{" "}
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </li>
            <li>
              <span className="font-semibold text-stone-600">
                Cook the omelette:
              </span>{" "}
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className="font-semibold text-stone-600">
                Add fillings (optional):
              </span>{" "}
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <span className="font-semibold">Fold and serve:</span> As the
              omelette continues to cook, carefully lift one edge and fold it
              over the fillings. Let it cook for another minute, then slide it
              onto a plate.
            </li>
            <li>
              <span className="font-semibold text-stone-600">Enjoy:</span> Serve
              hot, with additional salt and pepper if needed.
            </li>
          </ol>
        </div>
        <div className="p-5 text-stone-600 mb-3">
          <h2 className="text-[#854632] text-2xl  mb-4">Nutrition</h2>
          <p className="mb-4">
            The table below shows nutritional values per serving without the
            additional fillings:
          </p>
          <table className="w-full">
            <tbody>
              {[
                ["Calories", "277kcal"],
                ["Carbs", "0g"],
                ["Protein", "20g"],
                ["Fat", "22g"],
              ].map(([label, value]) => (
                <tr key={label} className="border-b border-gray-200">
                  <td className="py-3">{label}</td>
                  <td className="py-3 text-right font-semibold text-[#854632]">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
