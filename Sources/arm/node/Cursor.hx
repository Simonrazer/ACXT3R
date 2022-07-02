package arm.node;

@:keep class Cursor extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _SetLocation = new armory.logicnode.SetLocationNode(this);
		var _OnUpdate_001 = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate_001.addOutputs([_SetLocation]);
		_SetLocation.addInput(_OnUpdate_001, 0);
		_SetLocation.addInput(new armory.logicnode.ObjectNode(this, "Cursor"), 0);
		var _VectorMath = new armory.logicnode.VectorMathNode(this);
		_VectorMath.property0 = "Add";
		var _VectorMath_001 = new armory.logicnode.VectorMathNode(this);
		_VectorMath_001.property0 = "Multiply";
		var _MouseCoords = new armory.logicnode.MouseCoordsNode(this);
		_MouseCoords.addOutputs([new armory.logicnode.VectorNode(this, 0.0, 0.0, 0.0)]);
		_MouseCoords.addOutputs([_VectorMath_001]);
		_MouseCoords.addOutputs([new armory.logicnode.IntegerNode(this, 0)]);
		_VectorMath_001.addInput(_MouseCoords, 1);
		_VectorMath_001.addInput(new armory.logicnode.VectorNode(this, 0.05000000074505806, -0.05000000074505806, 0.0), 0);
		_VectorMath_001.addOutputs([_VectorMath]);
		_VectorMath_001.addOutputs([new armory.logicnode.FloatNode(this, 0.0)]);
		_VectorMath.addInput(_VectorMath_001, 0);
		var _GetLocation = new armory.logicnode.GetLocationNode(this);
		_GetLocation.addInput(new armory.logicnode.ObjectNode(this, "Cursor"), 0);
		_GetLocation.addOutputs([_VectorMath]);
		_VectorMath.addInput(_GetLocation, 0);
		_VectorMath.addOutputs([_SetLocation]);
		_VectorMath.addOutputs([new armory.logicnode.FloatNode(this, 0.0)]);
		_SetLocation.addInput(_VectorMath, 0);
		_SetLocation.addOutputs([new armory.logicnode.NullNode(this)]);
		var _SetMouseLock = new armory.logicnode.SetMouseLockNode(this);
		var _OnInit = new armory.logicnode.OnInitNode(this);
		_OnInit.addOutputs([_SetMouseLock]);
		_SetMouseLock.addInput(_OnInit, 0);
		_SetMouseLock.addInput(new armory.logicnode.BooleanNode(this, true), 0);
		_SetMouseLock.addOutputs([new armory.logicnode.NullNode(this)]);
		var _SetMouseLock_001 = new armory.logicnode.SetMouseLockNode(this);
		var _OnKeyboard = new armory.logicnode.OnKeyboardNode(this);
		_OnKeyboard.property0 = "Started";
		_OnKeyboard.property1 = "escape";
		_OnKeyboard.addOutputs([_SetMouseLock_001]);
		_SetMouseLock_001.addInput(_OnKeyboard, 0);
		_SetMouseLock_001.addInput(new armory.logicnode.BooleanNode(this, false), 0);
		_SetMouseLock_001.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
