package com.example.lab06;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class PresidentDetailsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_president_details);

        Bundle b = getIntent().getExtras();
        int i = b.getInt(MainActivity.EXTRA, 0);

        ((TextView)findViewById(R.id.tvName))
                .setText(GlobalModel.getInstance().getPresident(i).getName());
        ((TextView)findViewById(R.id.tvStart))
                .setText(GlobalModel.getInstance().getPresident(i).getStartDuty());
        ((TextView)findViewById(R.id.tvEnd))
                .setText(GlobalModel.getInstance().getPresident(i).getEndDuty());
        ((TextView)findViewById(R.id.tvDescription))
                .setText(GlobalModel.getInstance().getPresident(i).getDescription());
    }
}
