package com.example.lab05;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.PersistableBundle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "DBG";
    private static final String PREF_CREATIONS = "creations";
    private static final String PREF_VISIBLES = "visible";
    private static final String PREF_FOREGROUNDS = "foreground";

    private SimpleStorage permanentStorage;
    private Counter       creations, visibles, foregrounds;

    private class SimpleStorage {
        private static final String PREF = "lab05_prefs";

        private SharedPreferences prefGet;

        SimpleStorage() {
            prefGet = getSharedPreferences(PREF, Activity.MODE_PRIVATE);
        }

        public int getVal(String key) {
            return prefGet.getInt(key, 0);
        }

        public void setVal(String key, int val) {
            SharedPreferences.Editor prefEditor = prefGet.edit();
            prefEditor.putInt(key, val);
            prefEditor.commit();
        }
    }

    private void updateScreen() {
        TextView tv = (TextView)findViewById(R.id.tvCreations);
        tv.setText(Integer.toString(creations.getValue()));

        tv = (TextView)findViewById(R.id.tvVisibles);
        tv.setText(Integer.toString(visibles.getValue()));

        tv = (TextView)findViewById(R.id.tvForegrounds);
        tv.setText(Integer.toString(foregrounds.getValue()));
    }

    private void updateStorage() {
        permanentStorage.setVal(PREF_CREATIONS, creations.getValue());
        permanentStorage.setVal(PREF_VISIBLES, visibles.getValue());
        permanentStorage.setVal(PREF_FOREGROUNDS, foregrounds.getValue());
    }

    public void onClickReset(View view) {
        creations.reset(); visibles.reset(); foregrounds.reset();
        updateScreen(); updateStorage();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG, "onCreate");

        permanentStorage = new SimpleStorage();
        creations = new Counter(permanentStorage.getVal(PREF_CREATIONS));
        visibles = new Counter(permanentStorage.getVal(PREF_VISIBLES));
        foregrounds = new Counter(permanentStorage.getVal(PREF_FOREGROUNDS));

        setContentView(R.layout.activity_main);
        creations.increment();
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.d(TAG, "onStart");

        visibles.increment();
        updateScreen();
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d(TAG, "onResume");

        foregrounds.increment();
        updateScreen();
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d(TAG, "onPause");

        updateStorage();
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d(TAG, "onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d(TAG, "onRestart");
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();      // you can't store preferences here because some resources may have been already destroyed
        Log.d(TAG, "onDestroy");
    }

    @Override
    public void onSaveInstanceState(Bundle outState, PersistableBundle outPersistentState) {
        super.onSaveInstanceState(outState, outPersistentState);
        Log.d(TAG, "onSavedInstanceState");
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);
        Log.d(TAG, "onRestoreInstanceState");
    }
}
