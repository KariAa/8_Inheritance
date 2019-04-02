package people;

/**
 * Models a person with name
 * @version 1.0
 * @author OPE
 * @since 1.1.1999
 */
public class Person {
    private String name;

    /**
     * Creates a person with name
     * @param name person's whole name
     */
    public Person(String name) {
        this.name=name;
    }

    /**
     * Returns all data known from a person
     * @return name
     */
    public String getInfo() {
        return this.name;
    }
}
