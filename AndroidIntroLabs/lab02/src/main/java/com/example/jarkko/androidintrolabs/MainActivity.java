package com.example.jarkko.androidintrolabs;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
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
        } else if (view == findViewById(R.id.btMinus)) {
            counter.decrement();
        } else if (view == findViewById(R.id.btReset)) {
            counter.reset();
        }

        updateValue();
    }

    private void updateValue() {
        TextView tv = (TextView)findViewById(R.id.tvValue);
        tv.setText(Integer.toString(counter.getValue()));
    }
}
