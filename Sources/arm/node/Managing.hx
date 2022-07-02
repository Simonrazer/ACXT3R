package arm.node;

@:keep class Managing extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _SetProperty_001 = new armory.logicnode.SetPropertyNode(this);
		var _OnInit_001 = new armory.logicnode.OnInitNode(this);
		_OnInit_001.addOutputs([_SetProperty_001]);
		_SetProperty_001.addInput(_OnInit_001, 0);
		var _GlobalObject_002 = new armory.logicnode.GlobalObjectNode(this);
		_GlobalObject_002.addOutputs([_SetProperty_001]);
		_SetProperty_001.addInput(_GlobalObject_002, 0);
		_SetProperty_001.addInput(new armory.logicnode.StringNode(this, "EnemyDamage"), 0);
		var _Integer_001 = new armory.logicnode.IntegerNode(this);
		_Integer_001.addInput(new armory.logicnode.IntegerNode(this, 30), 0);
		_Integer_001.addOutputs([_SetProperty_001]);
		_SetProperty_001.addInput(_Integer_001, 0);
		_SetProperty_001.addOutputs([new armory.logicnode.NullNode(this)]);
		var _SetProperty = new armory.logicnode.SetPropertyNode(this);
		var _OnInit = new armory.logicnode.OnInitNode(this);
		_OnInit.addOutputs([_SetProperty]);
		_SetProperty.addInput(_OnInit, 0);
		var _GlobalObject_001 = new armory.logicnode.GlobalObjectNode(this);
		_GlobalObject_001.addOutputs([_SetProperty]);
		_SetProperty.addInput(_GlobalObject_001, 0);
		_SetProperty.addInput(new armory.logicnode.StringNode(this, "PlayerDamage"), 0);
		var _Integer = new armory.logicnode.IntegerNode(this);
		_Integer.addInput(new armory.logicnode.IntegerNode(this, 20), 0);
		_Integer.addOutputs([_SetProperty]);
		_SetProperty.addInput(_Integer, 0);
		_SetProperty.addOutputs([new armory.logicnode.NullNode(this)]);
		var _PauseAction = new armory.logicnode.PauseActionNode(this);
		var _OnInit_002 = new armory.logicnode.OnInitNode(this);
		var _PauseAction_001 = new armory.logicnode.PauseActionNode(this);
		_PauseAction_001.addInput(_OnInit_002, 0);
		_PauseAction_001.addInput(new armory.logicnode.ObjectNode(this, "JetExplosion"), 0);
		_PauseAction_001.addOutputs([new armory.logicnode.NullNode(this)]);
		var _PauseAction_002 = new armory.logicnode.PauseActionNode(this);
		_PauseAction_002.addInput(_OnInit_002, 0);
		_PauseAction_002.addInput(new armory.logicnode.ObjectNode(this, "Thruster_R"), 0);
		_PauseAction_002.addOutputs([new armory.logicnode.NullNode(this)]);
		var _PauseAction_003 = new armory.logicnode.PauseActionNode(this);
		_PauseAction_003.addInput(_OnInit_002, 0);
		_PauseAction_003.addInput(new armory.logicnode.ObjectNode(this, "Thruster_L"), 0);
		_PauseAction_003.addOutputs([new armory.logicnode.NullNode(this)]);
		_OnInit_002.addOutputs([_PauseAction, _PauseAction_001, _PauseAction_002, _PauseAction_003]);
		_PauseAction.addInput(_OnInit_002, 0);
		_PauseAction.addInput(new armory.logicnode.ObjectNode(this, "Sphere"), 0);
		_PauseAction.addOutputs([new armory.logicnode.NullNode(this)]);
		var _SetProperty_002 = new armory.logicnode.SetPropertyNode(this);
		var _OnInit_003 = new armory.logicnode.OnInitNode(this);
		_OnInit_003.addOutputs([_SetProperty_002]);
		_SetProperty_002.addInput(_OnInit_003, 0);
		var _GlobalObject = new armory.logicnode.GlobalObjectNode(this);
		_GlobalObject.addOutputs([_SetProperty_002]);
		_SetProperty_002.addInput(_GlobalObject, 0);
		_SetProperty_002.addInput(new armory.logicnode.StringNode(this, "EF"), 0);
		var _Boolean = new armory.logicnode.BooleanNode(this);
		_Boolean.addInput(new armory.logicnode.BooleanNode(this, true), 0);
		_Boolean.addOutputs([_SetProperty_002]);
		_SetProperty_002.addInput(_Boolean, 0);
		_SetProperty_002.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
