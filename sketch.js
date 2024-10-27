let estrelas = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 400; i++) {
        estrelas.push(new Estrela());
    }
}

function draw() {
    background(0); // Fundo preto para simular o espaço

    translate(width / 2, height / 2); // Centralizar a animação
    for (let estrela of estrelas) {
        estrela.update();
        estrela.show();
    }
}

class Estrela {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
    }

    update() {
        this.z -= 5;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    show() {
        fill(255);
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);

        let r = map(this.z, 0, width, 8, 0);
        ellipse(sx, sy, r, r);
    }
}
