package arm.node;

@:keep class UI extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _SetVisible_002 = new armory.logicnode.SetVisibleNode(this);
		var _Gate = new armory.logicnode.GateNode(this);
		_Gate.property0 = "Equal";
		_Gate.property1 = 9.999999747378752e-05;
		var _OnEvent = new armory.logicnode.OnEventNode(this);
		_OnEvent.property0 = "-1 Credit";
		var _Gate_001 = new armory.logicnode.GateNode(this);
		_Gate_001.property0 = "Equal";
		_Gate_001.property1 = 9.999999747378752e-05;
		_Gate_001.addInput(_OnEvent, 0);
		var _GetProperty_001 = new armory.logicnode.GetPropertyNode(this);
		var _GlobalObject = new armory.logicnode.GlobalObjectNode(this);
		var _GetProperty = new armory.logicnode.GetPropertyNode(this);
		_GetProperty.addInput(_GlobalObject, 0);
		_GetProperty.addInput(new armory.logicnode.StringNode(this, "HP"), 0);
		var _Math = new armory.logicnode.MathNode(this);
		_Math.property0 = "Divide";
		_Math.property1 = "false";
		_Math.addInput(_GetProperty, 0);
		_Math.addInput(new armory.logicnode.FloatNode(this, 100.0), 0);
		var _Vector = new armory.logicnode.VectorNode(this);
		_Vector.addInput(_Math, 0);
		_Vector.addInput(new armory.logicnode.FloatNode(this, 1.0), 0);
		_Vector.addInput(new armory.logicnode.FloatNode(this, 1.0), 0);
		var _SetScale = new armory.logicnode.SetScaleNode(this);
		var _OnUpdate = new armory.logicnode.OnUpdateNode(this);
		_OnUpdate.addOutputs([_SetScale]);
		_SetScale.addInput(_OnUpdate, 0);
		_SetScale.addInput(new armory.logicnode.ObjectNode(this, "Healthbar"), 0);
		_SetScale.addInput(_Vector, 0);
		_SetScale.addOutputs([new armory.logicnode.NullNode(this)]);
		_Vector.addOutputs([_SetScale]);
		_Math.addOutputs([_Vector]);
		_GetProperty.addOutputs([_Math]);
		_GlobalObject.addOutputs([_GetProperty, _GetProperty_001]);
		_GetProperty_001.addInput(_GlobalObject, 0);
		_GetProperty_001.addInput(new armory.logicnode.StringNode(this, "Credits"), 0);
		var _Gate_003 = new armory.logicnode.GateNode(this);
		_Gate_003.property0 = "Equal";
		_Gate_003.property1 = 9.999999747378752e-05;
		_Gate_003.addInput(_OnEvent, 0);
		_Gate_003.addInput(_GetProperty_001, 0);
		var _Integer_001 = new armory.logicnode.IntegerNode(this);
		_Integer_001.addInput(new armory.logicnode.IntegerNode(this, 3), 0);
		_Integer_001.addOutputs([_Gate_003]);
		_Gate_003.addInput(_Integer_001, 0);
		var _SetVisible = new armory.logicnode.SetVisibleNode(this);
		_SetVisible.addInput(_Gate_003, 0);
		_SetVisible.addInput(new armory.logicnode.ObjectNode(this, "Life3"), 0);
		_SetVisible.addInput(new armory.logicnode.BooleanNode(this, false), 0);
		_SetVisible.addOutputs([new armory.logicnode.NullNode(this)]);
		_Gate_003.addOutputs([_SetVisible]);
		_Gate_003.addOutputs([new armory.logicnode.NullNode(this)]);
		_GetProperty_001.addOutputs([_Gate, _Gate_001, _Gate_003]);
		_Gate_001.addInput(_GetProperty_001, 0);
		var _Integer_002 = new armory.logicnode.IntegerNode(this);
		_Integer_002.addInput(new armory.logicnode.IntegerNode(this, 2), 0);
		_Integer_002.addOutputs([_Gate_001]);
		_Gate_001.addInput(_Integer_002, 0);
		var _SetVisible_001 = new armory.logicnode.SetVisibleNode(this);
		_SetVisible_001.addInput(_Gate_001, 0);
		_SetVisible_001.addInput(new armory.logicnode.ObjectNode(this, "Life2"), 0);
		_SetVisible_001.addInput(new armory.logicnode.BooleanNode(this, false), 0);
		_SetVisible_001.addOutputs([new armory.logicnode.NullNode(this)]);
		_Gate_001.addOutputs([_SetVisible_001]);
		_Gate_001.addOutputs([new armory.logicnode.NullNode(this)]);
		_OnEvent.addOutputs([_Gate, _Gate_001, _Gate_003]);
		_Gate.addInput(_OnEvent, 0);
		_Gate.addInput(_GetProperty_001, 0);
		var _Integer_003 = new armory.logicnode.IntegerNode(this);
		_Integer_003.addInput(new armory.logicnode.IntegerNode(this, 1), 0);
		_Integer_003.addOutputs([_Gate]);
		_Gate.addInput(_Integer_003, 0);
		_Gate.addOutputs([_SetVisible_002]);
		_Gate.addOutputs([new armory.logicnode.NullNode(this)]);
		_SetVisible_002.addInput(_Gate, 0);
		_SetVisible_002.addInput(new armory.logicnode.ObjectNode(this, "Life1"), 0);
		_SetVisible_002.addInput(new armory.logicnode.BooleanNode(this, false), 0);
		_SetVisible_002.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
