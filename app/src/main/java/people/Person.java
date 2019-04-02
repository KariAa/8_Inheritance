package people;

public class Person<RecentlyNonNull> {
    private String name;
    public Person(String name) {
        this.name=name;
    }

    public String getInfo() {
        return this.name;
    }
}
