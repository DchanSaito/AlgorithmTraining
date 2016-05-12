/* 
  挿入ソートの実装
  実行方法
    Golangのインスコ(mac)
      brew install go
    プログラム実行方法
      go run insertsort.go
*/
package main

import "fmt"

func main() {
    // ここの値を好きにいじってください
    data := [...]int{9, 5, 23, 4, 76, 1, 89, 12, 7}
    fmt.Println(data)
    for i := 1; i < len(data); i++ {
        insertNum := -1
        fmt.Println(fmt.Sprintf("-------------- i=%d ----------------", i))
        for j := i; j > 0; j-- {
            if (data[j] < data[j-1]) {
                tmp := data[j]
                data[j] = data[j-1]
                data[j-1] = tmp
                insertNum = j
            }
        }
        if (insertNum >= 0) {
            fmt.Print(fmt.Sprintf("%d番目の要素を", i))
            fmt.Println(fmt.Sprintf("%d番目に挿入", insertNum-1))
        } else {
            fmt.Println("変更なし")
        }
        fmt.Println(data)
    }
    fmt.Println("結果")
    fmt.Println(data)
}
