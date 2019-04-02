package com.example.lab03;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private Counter counter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        counter = new Counter();

        setContentView(R.layout.activity_main);
        updateValue();
    }

    public void buttonPressed(View view) {
        if (view == findViewById(R.id.btPlus)) {
            counter.increment();
        } else if (view == findViewById(R.id.btMiinus)) {
            counter.decrement();
        } else if (view == findViewById(R.id.btReset)) {
            counter.reset();
        }

        updateValue();
    }

    public void radioButtonPressed(View view) {
        updateValue();
    }

    private void updateValue() {
        int val = counter.getValue();

        TextView tv = (TextView)findViewById(R.id.tvValue);
        RadioGroup rg = (RadioGroup)findViewById(R.id.rgBase);
        tv.setText(rg.getCheckedRadioButtonId() == R.id.rbDEC ? Integer.toString(val) : Integer.toHexString(val));

        ImageView iv = (ImageView)findViewById(R.id.ivAlarm);
        iv.setVisibility(val < 0 ? View.VISIBLE : View.INVISIBLE);
    }
}
