import java.util.Scanner;
class Mahasiswa{
	String nama;
	String usia;
	String kelas;
	String NPM;
	
	Mahasiswa(String inputNama, String inputUsia, String inputKelas, String inputNPM){
		nama = inputNama;
		usia = inputUsia;
		kelas = inputKelas;
		NPM = inputNPM;
		
		System.out.println(nama);
		System.out.println(usia);
		System.out.println(kelas);
		System.out.println(NPM);
		
		System.out.println("Identitas");
	}
}

public class mahasiswa
{
	public static void main(String[] args){
		Scanner input  = new Scanner (System.in);
		System.out.print("Masukkan Nama		=");
		String nama = input.nextLine();
		System.out.print("Masukkan Usia		=");
		String usia = input.nextLine();
		System.out.print("Masukkan Kelas		=");
		String kelas = input.nextLine();
		System.out.print("Masukkan NPM	=");
		String NPM = input.nextLine();
		
		System.out.println("Nama Lengkap 		:" +nama);
		System.out.println("Usia 				:" +usia);
		System.out.println("Kelas 			:" +kelas);
		System.out.println("NPM 			:" +NPM);
	}
}
