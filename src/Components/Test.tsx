import Image from "next/image";

export default function OmeletteRecipe() {
  return (
    <div className="min-h-screen bg-[#faf4ed] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-2xl p-8">
        <Image
          src="/image-omelette.jpeg"
          alt="Omelette with vegetables"
          width={600}
          height={400}
          className="w-full rounded-xl mb-6"
        />

        <h1 className="text-3xl font-bold mb-4">Simple Omelette Recipe</h1>
        <p className="text-gray-600 mb-6">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>

        <div className="bg-[#fff5f0] rounded-xl p-6 mb-8">
          <h2 className="text-[#854632] text-xl font-semibold mb-4">
            Preparation time
          </h2>
          <ul className="space-y-2">
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

        <h2 className="text-[#854632] text-xl font-semibold mb-4">
          Ingredients
        </h2>
        <ul className="list-disc pl-5 mb-8 space-y-2">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>

        <h2 className="text-[#854632] text-xl font-semibold mb-4">
          Instructions
        </h2>
        <ol className="list-decimal pl-5 mb-8 space-y-4">
          <li>
            <span className="font-semibold">Beat the eggs:</span> In a bowl,
            beat the eggs with a pinch of salt and pepper until they are well
            mixed. You can add a tablespoon of water or milk for a fluffier
            texture.
          </li>
          <li>
            <span className="font-semibold">Heat the pan:</span> Place a
            non-stick frying pan over medium heat and add butter or oil.
          </li>
          <li>
            <span className="font-semibold">Cook the omelette:</span> Once the
            butter is melted and bubbling, pour in the eggs. Tilt the pan to
            ensure the eggs evenly coat the surface.
          </li>
          <li>
            <span className="font-semibold">Add fillings (optional):</span> When
            the eggs begin to set at the edges but are still slightly runny in
            the middle, sprinkle your chosen fillings over one half of the
            omelette.
          </li>
          <li>
            <span className="font-semibold">Fold and serve:</span> As the
            omelette continues to cook, carefully lift one edge and fold it over
            the fillings. Let it cook for another minute, then slide it onto a
            plate.
          </li>
          <li>
            <span className="font-semibold">Enjoy:</span> Serve hot, with
            additional salt and pepper if needed.
          </li>
        </ol>

        <h2 className="text-[#854632] text-xl font-semibold mb-4">Nutrition</h2>
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
                <td className="py-3 text-right font-semibold">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
