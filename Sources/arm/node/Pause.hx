package arm.node;

@:keep class Pause extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _SetProperty = new armory.logicnode.SetPropertyNode(this);
		var _PauseAction = new armory.logicnode.PauseActionNode(this);
		var _Gate = new armory.logicnode.GateNode(this);
		_Gate.property0 = "Equal";
		_Gate.property1 = 9.999999747378752e-05;
		var _OnInit = new armory.logicnode.OnInitNode(this);
		_OnInit.addOutputs([_Gate]);
		_Gate.addInput(_OnInit, 0);
		var _GetProperty = new armory.logicnode.GetPropertyNode(this);
		var _GlobalObject = new armory.logicnode.GlobalObjectNode(this);
		_GlobalObject.addOutputs([_GetProperty, _SetProperty]);
		_GetProperty.addInput(_GlobalObject, 0);
		_GetProperty.addInput(new armory.logicnode.StringNode(this, "EF"), 0);
		_GetProperty.addOutputs([_Gate]);
		_Gate.addInput(_GetProperty, 0);
		var _Boolean = new armory.logicnode.BooleanNode(this);
		_Boolean.addInput(new armory.logicnode.BooleanNode(this, true), 0);
		_Boolean.addOutputs([_Gate]);
		_Gate.addInput(_Boolean, 0);
		_Gate.addOutputs([_PauseAction]);
		var _Sleep = new armory.logicnode.SleepNode(this);
		_Sleep.addInput(_Gate, 1);
		_Sleep.addInput(new armory.logicnode.FloatNode(this, 0.1666666716337204), 0);
		var _RemoveObject = new armory.logicnode.RemoveObjectNode(this);
		_RemoveObject.addInput(_Sleep, 0);
		var _Self = new armory.logicnode.SelfNode(this);
		_Self.addOutputs([_PauseAction, _RemoveObject]);
		_RemoveObject.addInput(_Self, 0);
		_RemoveObject.addOutputs([new armory.logicnode.NullNode(this)]);
		_Sleep.addOutputs([_RemoveObject]);
		_Gate.addOutputs([_Sleep]);
		_PauseAction.addInput(_Gate, 0);
		_PauseAction.addInput(_Self, 0);
		_PauseAction.addOutputs([_SetProperty]);
		_SetProperty.addInput(_PauseAction, 0);
		_SetProperty.addInput(_GlobalObject, 0);
		_SetProperty.addInput(new armory.logicnode.StringNode(this, "EF"), 0);
		var _Boolean_001 = new armory.logicnode.BooleanNode(this);
		_Boolean_001.addInput(new armory.logicnode.BooleanNode(this, false), 0);
		_Boolean_001.addOutputs([_SetProperty]);
		_SetProperty.addInput(_Boolean_001, 0);
		_SetProperty.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
