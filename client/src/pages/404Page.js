import React, { useState, useEffect } from "react";
import * as Isomer from "isomer";

const Page404 = () => {

    const colors = [
        [204, 85, 0,],   // Orange1
        [242, 140, 40], // Orange2
        [64, 64, 67],   // Gray1
        [113, 121, 126],// Gray2
        [211, 211, 211],// Gray3
    ];

    // Helper function to select a random color
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    useEffect(() => {
        const Shape = Isomer.Shape;
        const Point = Isomer.Point;
        const Color = Isomer.Color;
        const canvas = document.getElementById("can");
        const iso = new Isomer(canvas);
        const ctx = canvas.getContext("2d");

        const points = [
            [0, 4, 3], [0, 6, 4], [0, 5, 4], [0, 4, 4], [0, 4, 5], [0, 6, 5],
            [0, 1, 3], [0, 0, 3], [0, -1, 3], [0, 1, 4], [0, -1, 4],
            [0, 1, 5], [0, 0, 5], [0, -1, 5],
            [0, -6, 3], [0, -4, 4], [0, -5, 4], [0, -6, 4], [0, -6, 5], [0, -4, 5]
        ];

        let cubes = [];

        const intervalId = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < cubes.length; i++) {
                const cube = cubes[i];
                const { point, color } = cube;

                iso.add(
                    Shape.Prism(new Point(point[0], point[1], point[2])),
                    new Color(color[0], color[1], color[2])
                );
            }

            if (points.length > 0) {
                const point = points.splice(0, 1)[0];
                const color = getRandomColor();
                cubes.push({ point, color });
            } else {
                clearInterval(intervalId);  // stop the interval when there's no more point
            }
        }, 120);

        // Return a cleanup function
        return () => {
            clearInterval(intervalId);
        }

    }, []);

    return (
        <div className="justify-center self-center mx-auto">
            <center>
                <canvas width="1200" height="800" id="can">
                </canvas>
            </center>
        </div>
    );
};

export default Page404;