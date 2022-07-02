package arm.node;

@:keep class Laser extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _RemoveObject_001 = new armory.logicnode.RemoveObjectNode(this);
		var _Sleep_001 = new armory.logicnode.SleepNode(this);
		var _OnInit_001 = new armory.logicnode.OnInitNode(this);
		_OnInit_001.addOutputs([_Sleep_001]);
		_Sleep_001.addInput(_OnInit_001, 0);
		_Sleep_001.addInput(new armory.logicnode.FloatNode(this, 2.0), 0);
		_Sleep_001.addOutputs([_RemoveObject_001]);
		_RemoveObject_001.addInput(_Sleep_001, 0);
		var _Self = new armory.logicnode.SelfNode(this);
		_Self.addOutputs([_RemoveObject_001]);
		_RemoveObject_001.addInput(_Self, 0);
		_RemoveObject_001.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
