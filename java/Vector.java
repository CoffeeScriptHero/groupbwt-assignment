public class Vector {
    private int x;
    private int y;

    public Vector(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public void setX(int x) {
        this.x = x;
    }

    public void setY(int y) {
        this.y = y;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public Vector add(Vector vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    public Vector subtract(Vector vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    public void multiply(int num) {
        if (num == 0) {
            throw new ArithmeticException();
        }

        this.x *= num;
        this.y *= num;
    }

    // або можна перевизначити toString
    public void prettyFormat() {
        System.out.printf("Vector{x = %d, y = %d}\n", x, y);
    }
}
