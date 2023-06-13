import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchReceptEntries } from '@utils/contentfulPosts';
import Carousel from '@components/carousel';

const RandomRecept = () => {
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    fetchReceptEntries().then((recipes) => {
      const shuffledRecipes = shuffleArray(recipes, 3); // Limiting to 3 random recipes
      setRandomRecipes(shuffledRecipes);
    });
  }, []);

  const shuffleArray = (array, limit) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, limit); // Returning a slice of the shuffled array
  };

  return (
    <div className="w-full h-3/4  bg-card">
      <div className="hidden md:flex grid-cols-3 gap-5 h-full lg:h-86 bg-card p-5">
        {randomRecipes.map((recipe) => {
          const firstImage = recipe.fields.receptFoto.length > 0 ? recipe.fields.receptFoto[0].fields : recipe.fields.receptFoto; // Get the first image if available
          const { titel, omschrijving, slug, auteur, gemaaktOp } = recipe.fields;
          const { file } = firstImage;

          const backgroundImageStyle = {
            backgroundImage: `url(${file.url})`,
          };

          const gradientOverlayStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
            zIndex: 1,
          };

          const contentContainerStyle = {
            position: 'relative',
            zIndex: 2,
          };

          return (
            <div key={gemaaktOp} className="text-white h-full w-full">
              <div style={backgroundImageStyle} className="text-center bg-cover bg-no-repeat bg-center h-full relative">
                <div style={gradientOverlayStyle}></div>
                <div className="h-full flex flex-col justify-evenly items-center" style={contentContainerStyle}>
                  <div className="p-1">
                    <h1>{titel}</h1>
                  </div>
                  <div className="flex w-1/2 md:w-1/2 lg:w-1/2 ">
                    <p className="h-fit">{omschrijving}</p>
                  </div>
                  <div>
                    <p>Gemaakt door:</p>
                    <p>{auteur}</p>
                  </div>
                  <Link href={`/recept/${slug}`} className="p-2">
                    <div className="text-black bg-white p-1 opacity-60 rounded-[10px]">Zie recept</div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      {/* This is the carousel for on the phone */}
      <div className="md:hidden bg-card w-fill h-full">
        <Carousel>
          {randomRecipes.map((recipe) => {
            const firstImage = recipe.fields.receptFoto.length > 0 ? recipe.fields.receptFoto[0].fields : recipe.fields.receptFoto; // Get the first image if available
            const { titel, omschrijving, slug, auteur, gemaaktOp } = recipe.fields;
            const { file } = firstImage;

            const backgroundImageStyle = {
              backgroundImage: `url(${file.url})`,
            };

            const gradientOverlayStyle = {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
              zIndex: 1,
            };

            const contentContainerStyle = {
              position: 'relative',
              zIndex: 2,
            };

            return (
              <div key={gemaaktOp} className="h-fit w-fit">
                <div className=" text-white h-full p-5">
                  <div
                    style={backgroundImageStyle}
                    className="text-center bg-cover bg-no-repeat bg-center h-full relative"
                  >
                    <div style={gradientOverlayStyle}></div>
                    <div
                      className="h-full flex flex-col justify-evenly items-center"
                      style={contentContainerStyle}
                    >
                      <div className="p-1">
                        <h1>{titel}</h1>
                      </div>
                      <p className="w-1/2">{omschrijving}</p>
                      <div>
                        <p>Gemaakt door:</p>
                        <p>{auteur}</p>
                      </div>
                      <Link href={`/recept/${slug}`} className="p-2">
                        <div className="text-black bg-white opacity-50 rounded-[10px] p-1">Zie recept</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default RandomRecept;
