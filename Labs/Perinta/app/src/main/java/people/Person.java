package people;
/**
 * @author kA
 * @since 5..2019
 * @version 1.0
 */
public class Person {
    private String name;

    /**
     * Creates a person with name
     * @param name person's whole name
     */
    public Person (String name){
        this.name=name;
    }

    /**
     * All info of a person
     * @return whole name
     */
    public String getInfo(){
        return this.name;
    }
}
