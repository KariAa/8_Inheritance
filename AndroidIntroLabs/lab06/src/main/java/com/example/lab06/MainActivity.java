package com.example.lab06;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends AppCompatActivity {
    public static final String TAG = "DBG";
    public static final String EXTRA = "com.example.lab06";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ListView lv = findViewById(R.id.lvPresidents);
        lv.setAdapter(new ArrayAdapter<President>(
                this,
                android.R.layout.simple_list_item_1,
                GlobalModel.getInstance().getPresidents())
        );

        lv.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                Log.d(TAG, "onItemClick(" + i + ")");
                Intent nextActivity = new Intent(MainActivity.this, PresidentDetailsActivity.class);
                nextActivity.putExtra(EXTRA, i);
                startActivity(nextActivity);
            }
        });
    }
}
