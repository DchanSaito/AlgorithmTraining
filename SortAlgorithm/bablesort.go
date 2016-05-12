/* 
  バブルソートの実装
  実行方法
    Golangのインスコ(mac)
      brew install go
    プログラム実行方法
      go run bablesort.go
*/
package main

import "fmt"

func main() {
    // ここの値を好きにいじってください
    data := [...]int{4, 5, 23, 45, 76, 1, 89, 12, 7}
    fmt.Println(data)
    // 最後の要素以外回す
    for i := 0; i < len(data) - 1; i++ {
        fmt.Println(fmt.Sprintf("-------------- i=%d ----------------", i))
        // お尻から頭に順番に比較していきます
        for j := len(data)-1; j > i; j-- {
            // j番目要素とj-1番目要素を比較し、j-1番目要素がでかいなら交換する
            if (data[j] < data[j-1]) {
                fmt.Println(fmt.Sprintf("%d番目の要素と%d番目の要素を交換します", j, j-1))
                tmp := data[j]
                data[j] = data[j-1]
                data[j-1] = tmp
                fmt.Println(data)
            }
        }
    }
    fmt.Println(data)
}
