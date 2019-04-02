using UnityEngine;
using System.Collections;
using UnityEngine.EventSystems;

/// <summary>
/// Pointer controller listens mouse button up/down events on selected component.
/// </summary>
/// 
public class PointerController : MonoBehaviour, IPointerDownHandler, IPointerUpHandler {
	//class PointerController extends MonoBehaviour implements 
	//IPointerDownHandler, IPointerUpHandler


	[SerializeField] private  bool pressed;  
	/// <summary>
	/// Raises the pointer up event.
	/// </summary>
	/// <param name="eventData">Event data.</param>
	public void OnPointerUp (PointerEventData eventData) {
		Debug.Log (eventData);// ⇐ for testing!!!!
		Debug.Log(eventData.clickTime);
		pressed = false;
	}

	/// <summary>
	/// Raises the pointer down event.
	/// </summary>
	/// <param name="eventData">Event data.</param>
	public void OnPointerDown (PointerEventData eventData) {
		//Debug.Log (eventData);  ⇐ for testing!!!!
		pressed = true;
	}
	public bool Pressed{
		get{ return this.pressed;}
	}

}
