public class Demo {
    public static void main(String[] args) {
        Vector vec1 = new Vector(2, 5);
        Vector vec2 = new Vector(-1, 3);

        vec1.prettyFormat();
        vec2.prettyFormat();

        Vector vec3 = vec1.add(vec2);
        Vector vec4 = vec3.subtract(vec1);

        vec3.prettyFormat();
        vec4.prettyFormat();

        vec1.multiply(-1);
        vec1.prettyFormat();

        vec4.multiply(4);
        vec4.prettyFormat();
    }
}
