import datetime

x = datetime.datetime.today()

print(x.strftime("%A"))
print(x.strftime("%B"))
print(x.strftime("%c"))
print(type(x))

one_day = datetime.timedelta(days=10,hours=3)
print(one_day+x)