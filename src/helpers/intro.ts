type Entrance = () => void;

let revealed = false;
const waiting = new Set<Entrance>();

export const holdForReveal = (entrance: Entrance) => {
    if (revealed) {
        entrance();
        return () => {};
    }

    waiting.add(entrance);

    return () => {
        waiting.delete(entrance);
    };
};

export const revealPage = () => {
    if (revealed) return;

    revealed = true;
    waiting.forEach((entrance) => entrance());
    waiting.clear();
};
