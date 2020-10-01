package money;

class Dollar extends Money {

    public Dollar(int amount) {
        this.amount = amount;
    }
    public Dollar times(int multiplier) {
        return new Dollar (this.amount * multiplier);
    }

    @Override
    public boolean equals(Object object){
        Dollar dollar = (Dollar) object;
        return this.amount == dollar.amount;
    }
}