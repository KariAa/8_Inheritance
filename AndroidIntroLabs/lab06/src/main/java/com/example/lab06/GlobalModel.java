package com.example.lab06;

import java.util.ArrayList;

class GlobalModel {
    private static final GlobalModel ourInstance = new GlobalModel();

    private ArrayList<President> presidents;

    static GlobalModel getInstance() {
        return ourInstance;
    }

    private GlobalModel() {
        // construct the data source
        presidents = new ArrayList<President>();
        presidents.add(new President("Stahlberg, Kaarlo Juho", 1919, 1925, "Eka presidentti"));
        presidents.add(new President("Relander, Lauri Kristian", 1925, 1931, "Toka presidentti"));
        presidents.add(new President("Svinhufvud, Pehr, Evind", 1931, 1937, "Kolmas presidentti"));
        presidents.add(new President("Kallio, Kyosti", 1937, 1940, "Neljas presidentti"));
        presidents.add(new President("Ryti, Risto Heikki", 1940, 1944, "Viides presidentti"));
        presidents.add(new President("Mannerheim, Carl Gustav Emil", 1944, 1946, "Kuudes presidentti"));
        presidents.add(new President("Paasikivi, Juho Kusti", 1946, 1956, "Äkäinen ukko"));
        presidents.add(new President("Kekkonen, Urho Kaleva", 1956, 1982, "Pelimies"));
        presidents.add(new President("Koivisto, Mauno Henrik", 1982, 1994, "Manu"));
        presidents.add(new President("Ahtisaari, Martti Oiva Kalevi", 1994, 2000, "Mahtisaari"));
        presidents.add(new President("Halonen, Tarja Kaarina", 2000, 2012, "Eka naispreseidentti"));
    }

    public ArrayList<President> getPresidents() {
        return presidents;
    }

    public President getPresident(int i) {
        return presidents.get(i);
    }
}
