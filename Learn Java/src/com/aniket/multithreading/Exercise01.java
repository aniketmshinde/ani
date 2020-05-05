package com.aniket.multithreading;

class Processor implements Runnable {
    public Processor() {
        System.out.println("It is getting initiated in a runnable!!");
    }

    @Override
    public void run() {
        for (int i = 0; i < 10; ++i) {
            System.out.println("This is executing insider thread - " + Thread.currentThread().getName());

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

class Runner extends Thread{
    public Runner(String name) {
        super(name);
    }

    @Override
    public void run() {
        for( int i =0; i < 10; ++i){
            System.out.println("This is executing insider thread - " + currentThread().getName());

            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }
}

public class Exercise01 {

    public static void main(String[] args){
        System.out.println("I still can do it!");

        Runner run1 = new Runner("Thread-run1");
        run1.start();

        Runner run2 = new Runner("Thread-run2");
        run2.start();

        Thread process1 = new Thread(new Processor(), "Thread-run3");
        process1.start();

        Thread process2 = new Thread(new Processor(), "Thread-run4");
        process2.start();

        Thread process3 = new Thread(new Runnable() {
            @Override
            public void run() {
                for( int i =0; i < 10; ++i){
                    System.out.println("This is executing insider thread - " + Thread.currentThread().getName());

                    try {
                        Thread.sleep(500);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }

            }
        }, "Thread-run5");

        process3.start();
        System.out.println("Main thread exiting");
    }
}
