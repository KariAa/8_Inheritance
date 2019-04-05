package people;
/**
 * Models a doctor with name and title
 */
public class Doctor extends Person {   //1. PERINTÄ: kuka on super
    private String title;

    /**
     * Creates a doctor with name and professional title
     * @param name  whole name
     * @param title professional title
     */
    public Doctor(String name, String title){
                              //2. PERINTÄ: kutsu superin muodostinta
        super(name);          //PAKKO OLLA ENNEN MUITA LAUSEITA
        this.title=title;
    }

    /**
     * All info known
     * @return Name and title of a doctor
     */
    @Override                 //3. PERINTÄ: uudelleenmäärittele joitain perittyjä metodeja  @Override
    public String getInfo(){
        return super.getInfo()+"," + this.title;
    }

}
