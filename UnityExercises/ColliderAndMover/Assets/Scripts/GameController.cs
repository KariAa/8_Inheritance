using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour {

	PointerController up;
	PointerController down;
	PointerController left;
	PointerController right;
	//    Football sprite;
	Rigidbody2D ball;

	// Use this for initialization, GetComponent<PointerController>
	void Start () {
		up = GameObject.Find ("ButtonUp").GetComponent<PointerController> ();
		down = GameObject.Find ("ButtonDown").GetComponent<PointerController> ();
		left = GameObject.Find ("ButtonLeft").GetComponent<PointerController> ();
		right = GameObject.Find ("ButtonRight").GetComponent<PointerController> ();
		ball = GameObject.Find ("Ball").GetComponent<Rigidbody2D>();

	}

	// Update is called once per frame: f means float point type
	void Update () {

		if (up.Pressed) {
			ball.transform.Translate (0,0.1f,0);    //EXPLAIN!
			Debug.Log ("Up pressed"); //<== TEST
		}
		if (down.Pressed) {
			ball.transform.Translate (0,-0.1f,0);    
		}
		if (left.Pressed) {
			ball.transform.Translate (-0.1f,0,0);    
		}
		if (right.Pressed) {
			ball.transform.Translate (0.1f,0,0);    
		}
	}
}

