from time import sleep
import time

def sleep_3s():
    sleep(3)
    print('wake up')

print('start')
start = time.time()
sleep_3s()
print('end!, {}sec 걸림'.format(time.time()-start))