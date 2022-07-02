package arm.node;

@:keep class Obstacles extends armory.logicnode.LogicTree {

	public function new() { super(); notifyOnAdd(add); }

	override public function add() {
		var _SetVelocity = new armory.logicnode.SetVelocityNode(this);
		var _OnInit = new armory.logicnode.OnInitNode(this);
		_OnInit.addOutputs([_SetVelocity]);
		_SetVelocity.addInput(_OnInit, 0);
		var _Self = new armory.logicnode.SelfNode(this);
		_Self.addOutputs([_SetVelocity]);
		_SetVelocity.addInput(_Self, 0);
		var _Random_Vector_ = new armory.logicnode.RandomVectorNode(this);
		_Random_Vector_.addInput(new armory.logicnode.VectorNode(this, -7.0, -40.0, 0.0), 0);
		_Random_Vector_.addInput(new armory.logicnode.VectorNode(this, 7.0, -10.0, 0.0), 0);
		_Random_Vector_.addOutputs([_SetVelocity]);
		_SetVelocity.addInput(_Random_Vector_, 0);
		_SetVelocity.addInput(new armory.logicnode.VectorNode(this, 1.0, 1.0, 1.0), 0);
		var _Random_Vector__001 = new armory.logicnode.RandomVectorNode(this);
		_Random_Vector__001.addInput(new armory.logicnode.VectorNode(this, -10.0, -10.0, -10.0), 0);
		_Random_Vector__001.addInput(new armory.logicnode.VectorNode(this, 10.0, 10.0, 10.0), 0);
		_Random_Vector__001.addOutputs([_SetVelocity]);
		_SetVelocity.addInput(_Random_Vector__001, 0);
		_SetVelocity.addInput(new armory.logicnode.VectorNode(this, 1.0, 1.0, 1.0), 0);
		_SetVelocity.addOutputs([new armory.logicnode.NullNode(this)]);
	}
}
